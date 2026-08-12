<template>
  <div class="wsched">
    <header>
      <h1>Weekly schedule</h1>
      <div class="sub">
        <template v-if="currentView === 'list'">Drag blocks to reorder or move between days. Click the dot to recolor.</template>
        <template v-else>A read-only time-grid view of the week, 7am–10pm.</template>
      </div>
    </header>

    <div class="legend">
      <span class="item" v-for="cat in schedule.categories" :key="cat.id">
        <span class="swatch-dot" :style="{ background: cat.hex }"></span>{{ cat.label }}
      </span>
    </div>

    <div class="tabs">
      <button class="tab-btn" :class="{ active: currentView === 'list' }" @click="currentView = 'list'" type="button">List</button>
      <button class="tab-btn" :class="{ active: currentView === 'calendar' }" @click="currentView = 'calendar'" type="button">Calendar</button>
    </div>

    <div class="toolbar">
      <span class="hint">
        <template v-if="currentView === 'list'">Drag a block to move it · click text to edit · click the dot to change color · + to add, × to remove</template>
        <template v-else>Blocks are placed by their time text. Switch to List to edit, add, or recolor.</template>
      </span>
      <button class="reset" type="button" @click="resetSchedule">Reset to original</button>
    </div>

    <div class="body-layout">
      <div class="main-col">
        <!-- LIST VIEW -->
        <div v-if="currentView === 'list'" class="grid">
          <div class="day" v-for="(day, dayIndex) in schedule.days" :key="day.label">
            <div class="day-label">{{ day.label }}</div>

            <div
              class="block-list"
              @dragover.prevent
              @drop="onDrop($event, dayIndex)"
            >
              <div class="empty-day" v-if="day.blocks.length === 0">
                Drop a block here or add one below
              </div>

              <div
                class="block"
                v-for="(block, blockIndex) in day.blocks"
                :key="block.id"
                draggable="true"
                @dragstart="onDragStart($event, block)"
                :style="blockStyle(block)"
              >
                <button
                  type="button"
                  class="color-btn"
                  :style="{ background: getCategory(block.catId).hex }"
                  title="Change color"
                  @click.stop="toggleColorPicker(block.id)"
                ></button>

                <div class="color-popover" v-if="openColorPickerBlockId === block.id" @click.stop>
                  <div class="color-row" v-for="cat in schedule.categories" :key="cat.id">
                    <input type="color" :value="cat.hex" @click.stop @input="cat.hex = $event.target.value" />
                    <button type="button" class="cat-label" @click="assignColor(block, cat.id)">{{ cat.label }}</button>
                  </div>
                  <hr />
                  <div class="add-color-row" v-if="addingColorFor === block.id">
                    <input type="color" v-model="newColorHex" />
                    <input type="text" v-model="newColorLabel" placeholder="Color name" />
                    <button type="button" @click="confirmAddColor(block)">Add</button>
                  </div>
                  <button type="button" class="add-new-color-btn" v-else @click="startAddColor(block.id)">+ add new color</button>
                </div>

                <button class="remove-btn" type="button" title="Remove" @click="removeBlock(dayIndex, blockIndex)">×</button>

                <div
                  class="name"
                  contenteditable="true"
                  spellcheck="false"
                  @blur="block.name = $event.target.textContent"
                  @keydown.enter.prevent="$event.target.blur()"
                >{{ block.name }}</div>

                <div
                  class="time"
                  contenteditable="true"
                  spellcheck="false"
                  @blur="block.time = $event.target.textContent"
                  @keydown.enter.prevent="$event.target.blur()"
                >{{ block.time }}</div>
              </div>
            </div>

            <div class="add-form" v-if="openFormDayIndex === dayIndex">
              <select v-model="addCatId">
                <option v-for="cat in schedule.categories" :key="cat.id" :value="cat.id">{{ cat.label }}</option>
              </select>
              <input type="text" v-model="addName" placeholder="Label, e.g. Reading" />
              <input type="text" v-model="addTime" placeholder="Time, e.g. 8 – 9pm" />
              <div class="row">
                <button type="button" class="primary" @click="confirmAddBlock(dayIndex)">Add</button>
                <button type="button" @click="openFormDayIndex = null">Cancel</button>
              </div>
            </div>
            <button class="add-block-btn" type="button" v-else @click="startAddBlock(dayIndex)">+ add block</button>
          </div>
        </div>

        <!-- CALENDAR VIEW -->
        <div v-else class="cal-wrap">
          <div class="cal-grid">
            <div></div>
            <div class="cal-header-cell" v-for="day in schedule.days" :key="day.label">{{ day.label }}</div>

            <div class="cal-axis" :style="{ height: calTotalHeight + 'px' }">
              <div
                class="cal-axis-label"
                v-for="h in calHours"
                :key="h"
                :style="{ top: ((h - CAL_HOUR_START) * CAL_PX_PER_HOUR) + 'px' }"
              >{{ formatHour(h) }}</div>
            </div>

            <div
              class="cal-day-col"
              v-for="calDay in calendarDays"
              :key="calDay.label"
              :style="{ height: calTotalHeight + 'px', backgroundImage: calGridLines }"
            >
              <div
                class="cal-block"
                v-for="item in calDay.items"
                :key="item.block.id"
                :title="item.block.name + ' — ' + item.block.time"
                :style="calBlockStyle(item)"
              >
                <div class="name">{{ item.block.name }}</div>
                <div class="time" v-if="item.height > 30">{{ item.block.time }}</div>
              </div>
            </div>
          </div>

          <div class="cal-unscheduled" v-if="anyUnscheduled">
            Couldn't place on the grid (time format not recognized) —
            <template v-for="(d, i) in calendarDays" :key="d.label">
              <span v-if="d.unscheduled.length"><b>{{ d.label }}:</b> {{ d.unscheduled.map(b => b.name).join(', ') }}<template v-if="i < calendarDays.length - 1 && hasMoreUnscheduledAfter(i)"> · </template></span>
            </template>
          </div>
        </div>
      </div>

      <aside class="sidebar">
        <div class="panel">
          <h2>Daily notes</h2>
          <div class="day-picker">
            <button
              type="button"
              v-for="d in DAY_LABELS"
              :key="d"
              :class="{ active: d === activeNoteDay }"
              @click="activeNoteDay = d"
            >{{ d.slice(0, 2) }}</button>
          </div>
          <textarea
            class="notes-area"
            placeholder="Notes for this day…"
            v-model="sidebar.notes[activeNoteDay]"
          ></textarea>
        </div>

        <div class="panel">
          <h2>Free-time to-dos</h2>
          <div class="todo-add">
            <input type="text" v-model="todoInput" placeholder="Read, sketch, side project…" @keydown.enter="addTodo" />
            <button type="button" @click="addTodo">Add</button>
          </div>
          <div class="todo-list">
            <div class="todo-empty" v-if="sidebar.todos.length === 0">Nothing on the list yet.</div>
            <div class="todo-item" v-for="(todo, i) in sidebar.todos" :key="i">
              <input type="checkbox" v-model="todo.done" />
              <div
                class="txt"
                :class="{ done: todo.done }"
                contenteditable="true"
                spellcheck="false"
                @blur="todo.text = $event.target.textContent"
                @keydown.enter.prevent="$event.target.blur()"
              >{{ todo.text }}</div>
              <button class="del" type="button" title="Remove" @click="sidebar.todos.splice(i, 1)">×</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch, onMounted } from 'vue'

/* ---------- storage keys ---------- */
const STORAGE_KEY = 'weekly-schedule-data-v2'
const SIDEBAR_KEY = 'weekly-schedule-sidebar-v1'

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const DEFAULT_CATEGORIES = [
  { id: 'class', label: 'Class', hex: '#355e3b' },
  { id: 'meal', label: 'Meal', hex: '#a3812f' },
  { id: 'move', label: 'Movement / lock in', hex: '#4a7c59' },
  { id: 'open', label: 'Open / rest', hex: '#7c8767' },
  { id: 'work', label: 'Work', hex: '#7c4a26' }
]

let idCounter = 0
function genId() {
  idCounter += 1
  return 'b' + Date.now().toString(36) + idCounter + Math.random().toString(36).slice(2, 5)
}

function defaultData() {
  return {
    categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
    days: [
      { label: 'Sun', blocks: [] },
      { label: 'Mon', blocks: [
        { catId: 'move', name: 'Breakfast', time: '7:45am' },
        { catId: 'move', name: 'Gym', time: '8 – 9am' },
        { catId: 'move', name: 'Shower', time: '9 – 9:45am' },
        { catId: 'class', name: 'Chem for engineers', time: '10 – 10:50am' },
        { catId: 'class', name: 'Solid state', time: '11 – 11:50am' },
        { catId: 'meal', name: 'Lunch', time: '12 – 1pm' },
        { catId: 'class', name: 'Info com', time: '1 – 1:50pm' },
        { catId: 'class', name: 'Senior design', time: '2 – 2:50pm' },
        { catId: 'move', name: 'Lock in', time: '3 – 5pm' },
        { catId: 'meal', name: 'Dinner', time: '5 – 6pm' },
        { catId: 'class', name: 'Chem lab', time: '6 – 9pm' }
      ]},
      { label: 'Tue', blocks: [
        { catId: 'move', name: 'Wake up', time: '7:30am' },
        { catId: 'move', name: 'Breakfast', time: '7:45am' },
        { catId: 'move', name: 'Walk / light move', time: '8 – 8:45am' },
        { catId: 'move', name: 'Shower', time: '9 – 9:30am' },
        { catId: 'move', name: 'Lock in', time: '10 – 11am' },
        { catId: 'class', name: 'Engineering economics', time: '11am – 12:15pm' },
        { catId: 'meal', name: 'Lunch', time: '12:30 – 1:30pm' },
        { catId: 'work', name: 'Work', time: '1:30 – 4pm' },
        { catId: 'move', name: 'Lock in', time: '4 – 6pm' },
        { catId: 'meal', name: 'Dinner', time: '6 – 7pm' },
        { catId: 'move', name: 'Climbing', time: '7 – 9pm' }
      ]},
      { label: 'Wed', blocks: [
        { catId: 'move', name: 'Breakfast', time: '7:45am' },
        { catId: 'move', name: 'Gym', time: '8 – 9am' },
        { catId: 'move', name: 'Shower', time: '9 – 9:45am' },
        { catId: 'class', name: 'Chem for engineers', time: '10 – 10:50am' },
        { catId: 'class', name: 'Solid state', time: '11 – 11:50am' },
        { catId: 'meal', name: 'Lunch', time: '12 – 1pm' },
        { catId: 'class', name: 'Info com', time: '1 – 1:50pm' },
        { catId: 'class', name: 'Senior design', time: '2 – 2:50pm' },
        { catId: 'move', name: 'Lock in', time: '3 – 5pm' },
        { catId: 'meal', name: 'Dinner', time: '5 – 6pm' },
        { catId: 'move', name: 'Lock in', time: '6 – 7:30pm' },
        { catId: 'open', name: 'Open evening', time: '7:30 – 10pm' }
      ]},
      { label: 'Thu', blocks: [
        { catId: 'move', name: 'Wake up', time: '7:30am' },
        { catId: 'move', name: 'Breakfast', time: '7:45am' },
        { catId: 'move', name: 'Walk / light move', time: '8 – 8:45am' },
        { catId: 'move', name: 'Shower', time: '9 – 9:30am' },
        { catId: 'move', name: 'Lock in', time: '10 – 11am' },
        { catId: 'class', name: 'Engineering economics', time: '11am – 12:15pm' },
        { catId: 'meal', name: 'Lunch', time: '12:30 – 1:30pm' },
        { catId: 'work', name: 'Work', time: '1:30 – 4pm' },
        { catId: 'move', name: 'Lock in', time: '4 – 6pm' },
        { catId: 'meal', name: 'Dinner', time: '6 – 7pm' },
        { catId: 'move', name: 'Climbing', time: '7 – 9pm' }
      ]},
      { label: 'Fri', blocks: [
        { catId: 'move', name: 'Breakfast', time: '7:45am' },
        { catId: 'move', name: 'Gym', time: '8 – 9am' },
        { catId: 'move', name: 'Shower', time: '9 – 9:45am' },
        { catId: 'class', name: 'Chem for engineers', time: '10 – 10:50am' },
        { catId: 'class', name: 'Solid state', time: '11 – 11:50am' },
        { catId: 'meal', name: 'Lunch', time: '12 – 1pm' },
        { catId: 'class', name: 'Info com', time: '1 – 1:50pm' },
        { catId: 'class', name: 'Senior design', time: '2 – 2:50pm' },
        { catId: 'move', name: 'Lock in', time: '3 – 5pm' },
        { catId: 'meal', name: 'Dinner', time: '5 – 6pm' },
        { catId: 'move', name: 'Lock in', time: '6 – 7:30pm' },
        { catId: 'open', name: 'Open evening', time: '7:30 – 10pm' }
      ]},
      { label: 'Sat', blocks: [] }
    ]
  }
}

function withIds(d) {
  d.days.forEach(day => day.blocks.forEach(b => { if (!b.id) b.id = genId() }))
  return d
}

function freshSidebar() {
  const notes = {}
  DAY_LABELS.forEach(d => { notes[d] = '' })
  return { notes, todos: [] }
}

function loadSchedule() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
    if (saved && Array.isArray(saved.categories) && Array.isArray(saved.days) && saved.days.length === 7) {
      return withIds(saved)
    }
  } catch (e) {}
  return withIds(defaultData())
}

function loadSidebarData() {
  try {
    const saved = JSON.parse(localStorage.getItem(SIDEBAR_KEY) || 'null')
    if (saved && typeof saved.notes === 'object' && Array.isArray(saved.todos)) return saved
  } catch (e) {}
  return freshSidebar()
}

/* ---------- reactive state ---------- */
const schedule = reactive(loadSchedule())
const sidebar = reactive(loadSidebarData())

const currentView = ref('list')
const openFormDayIndex = ref(null)
const openColorPickerBlockId = ref(null)
const addingColorFor = ref(null)
const activeNoteDay = ref(DAY_LABELS[new Date().getDay()])
const todoInput = ref('')

const addName = ref('')
const addTime = ref('')
const addCatId = ref(schedule.categories[0]?.id || 'class')
const newColorHex = ref('#7f77dd')
const newColorLabel = ref('')

watch(schedule, () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(schedule))
}, { deep: true })

watch(sidebar, () => {
  localStorage.setItem(SIDEBAR_KEY, JSON.stringify(sidebar))
}, { deep: true })

/* ---------- helpers ---------- */
function getCategory(catId) {
  return schedule.categories.find(c => c.id === catId) || schedule.categories[0]
}

function hexToRgb(hex) {
  hex = (hex || '#888888').replace('#', '')
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('')
  const num = parseInt(hex, 16)
  const n = isNaN(num) ? 0x888888 : num
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}
function tint(hex, alpha) {
  const c = hexToRgb(hex)
  return `rgba(${c.r},${c.g},${c.b},${alpha})`
}
function darken(hex, factor) {
  const c = hexToRgb(hex)
  return `rgb(${Math.round(c.r * factor)},${Math.round(c.g * factor)},${Math.round(c.b * factor)})`
}

function blockStyle(block) {
  const cat = getCategory(block.catId)
  return {
    background: tint(cat.hex, 0.15),
    borderLeftColor: cat.hex,
    color: darken(cat.hex, 0.55)
  }
}

/* ---------- list view actions ---------- */
function toggleColorPicker(blockId) {
  openColorPickerBlockId.value = openColorPickerBlockId.value === blockId ? null : blockId
  addingColorFor.value = null
}
function assignColor(block, catId) {
  block.catId = catId
  openColorPickerBlockId.value = null
  addingColorFor.value = null
}
function startAddColor(blockId) {
  addingColorFor.value = blockId
  newColorHex.value = '#7f77dd'
  newColorLabel.value = ''
}
function confirmAddColor(block) {
  const newCat = { id: genId(), label: newColorLabel.value.trim() || 'Custom', hex: newColorHex.value }
  schedule.categories.push(newCat)
  block.catId = newCat.id
  openColorPickerBlockId.value = null
  addingColorFor.value = null
}

function removeBlock(dayIndex, blockIndex) {
  schedule.days[dayIndex].blocks.splice(blockIndex, 1)
}

function startAddBlock(dayIndex) {
  openFormDayIndex.value = dayIndex
  addName.value = ''
  addTime.value = ''
  addCatId.value = schedule.categories[0]?.id || 'class'
}
function confirmAddBlock(dayIndex) {
  const name = addName.value.trim() || 'Untitled'
  const time = addTime.value.trim() || ''
  schedule.days[dayIndex].blocks.push({ id: genId(), catId: addCatId.value, name, time })
  openFormDayIndex.value = null
}

function resetSchedule() {
  if (!confirm('Reset the schedule blocks back to the original layout? Notes and to-dos are kept.')) return
  const fresh = withIds(defaultData())
  schedule.categories = fresh.categories
  schedule.days = fresh.days
  openFormDayIndex.value = null
  openColorPickerBlockId.value = null
  addingColorFor.value = null
}

/* ---------- drag and drop ---------- */
function onDragStart(e, block) {
  e.dataTransfer.setData('text/plain', JSON.stringify({ blockId: block.id }))
  e.dataTransfer.effectAllowed = 'move'
}
function findBlockLocation(blockId) {
  for (let d = 0; d < schedule.days.length; d++) {
    const idx = schedule.days[d].blocks.findIndex(b => b.id === blockId)
    if (idx !== -1) return { dayIndex: d, blockIndex: idx }
  }
  return null
}
function onDrop(e, dayIndex) {
  let payload
  try { payload = JSON.parse(e.dataTransfer.getData('text/plain')) } catch (err) { return }
  if (!payload || !payload.blockId) return

  const loc = findBlockLocation(payload.blockId)
  if (!loc) return

  const listEl = e.currentTarget
  const blockEls = Array.from(listEl.querySelectorAll('.block'))
  let insertIndex = blockEls.length
  for (let i = 0; i < blockEls.length; i++) {
    const rect = blockEls[i].getBoundingClientRect()
    if (e.clientY < rect.top + rect.height / 2) { insertIndex = i; break }
  }

  const moving = schedule.days[loc.dayIndex].blocks.splice(loc.blockIndex, 1)[0]
  if (loc.dayIndex === dayIndex && loc.blockIndex < insertIndex) insertIndex -= 1
  schedule.days[dayIndex].blocks.splice(insertIndex, 0, moving)
}

/* ---------- to-dos ---------- */
function addTodo() {
  const val = todoInput.value.trim()
  if (!val) return
  sidebar.todos.push({ text: val, done: false })
  todoInput.value = ''
}

/* ---------- calendar view: time parsing ---------- */
function guessMeridiem(hour) {
  if (hour === 12) return 'pm'
  if (hour >= 7) return 'am'
  return 'pm'
}
function parseOnePart(part) {
  const m = part.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i)
  if (!m) return null
  return { hour: parseInt(m[1], 10), minute: m[2] ? parseInt(m[2], 10) : 0, meridiem: m[3] ? m[3].toLowerCase() : null }
}
function to24Minutes(hour, minute, meridiem) {
  let h = hour % 12
  if (meridiem === 'pm') h += 12
  return h * 60 + minute
}
function parseTimeRange(raw) {
  if (!raw) return null
  const isAfter = /^after\b/i.test(raw.trim())
  const clean = raw.replace(/^after\s*/i, '').replace(/[–—]/g, '-').trim()
  const segs = clean.split('-').map(s => s.trim()).filter(Boolean)
  if (segs.length === 0) return null
  const p0 = parseOnePart(segs[0])
  if (!p0) return null
  const p1 = segs.length > 1 ? parseOnePart(segs[1]) : null

  let mer0 = p0.meridiem, mer1 = p1 ? p1.meridiem : null
  if (!mer1 && mer0) mer1 = mer0
  if (!mer0 && mer1) mer0 = mer1
  if (!mer0) mer0 = guessMeridiem(p0.hour)
  if (!mer1 && p1) mer1 = guessMeridiem(p1.hour)

  let startMin = to24Minutes(p0.hour, p0.minute, mer0)
  let endMin
  if (p1) {
    endMin = to24Minutes(p1.hour, p1.minute, mer1)
    if (endMin <= startMin) endMin += 12 * 60
  } else if (isAfter) {
    endMin = 22 * 60
  } else {
    endMin = startMin + 15
  }
  if (startMin < 7 * 60) startMin = 7 * 60
  if (endMin > 22 * 60) endMin = 22 * 60
  if (endMin <= startMin) endMin = Math.min(startMin + 20, 22 * 60)
  return { start: startMin, end: endMin }
}

function layoutOverlaps(items) {
  items.sort((a, b) => a.range.start - b.range.start)
  const clusters = []
  let current = []
  let clusterEnd = -1
  items.forEach(item => {
    if (current.length === 0 || item.range.start < clusterEnd) {
      current.push(item)
      clusterEnd = Math.max(clusterEnd, item.range.end)
    } else {
      clusters.push(current)
      current = [item]
      clusterEnd = item.range.end
    }
  })
  if (current.length) clusters.push(current)

  clusters.forEach(cluster => {
    const columns = []
    cluster.forEach(item => {
      let placed = false
      for (let c = 0; c < columns.length; c++) {
        if (columns[c] <= item.range.start) { columns[c] = item.range.end; item.col = c; placed = true; break }
      }
      if (!placed) { columns.push(item.range.end); item.col = columns.length - 1 }
    })
    cluster.forEach(item => { item.totalCols = columns.length })
  })
}

/* ---------- calendar view: layout ---------- */
const CAL_HOUR_START = 7
const CAL_HOUR_END = 22
const CAL_PX_PER_HOUR = 48

const calTotalHeight = (CAL_HOUR_END - CAL_HOUR_START) * CAL_PX_PER_HOUR
const calHours = []
for (let h = CAL_HOUR_START; h <= CAL_HOUR_END; h++) calHours.push(h)
const calGridLines = `repeating-linear-gradient(to bottom, var(--line) 0, var(--line) 1px, transparent 1px, transparent ${CAL_PX_PER_HOUR}px)`

function formatHour(h) {
  const displayHour = h % 12 === 0 ? 12 : h % 12
  return displayHour + (h >= 12 ? 'PM' : 'AM')
}

const calendarDays = computed(() => {
  return schedule.days.map(day => {
    const unscheduled = []
    const items = []
    day.blocks.forEach(block => {
      const range = parseTimeRange(block.time)
      if (!range) { unscheduled.push(block); return }
      items.push({ block, range })
    })
    layoutOverlaps(items)
    return { label: day.label, items, unscheduled }
  })
})

const anyUnscheduled = computed(() => calendarDays.value.some(d => d.unscheduled.length > 0))
function hasMoreUnscheduledAfter(i) {
  return calendarDays.value.slice(i + 1).some(d => d.unscheduled.length > 0)
}

function calBlockStyle(item) {
  const cat = getCategory(item.block.catId)
  const top = (item.range.start - CAL_HOUR_START * 60) / 60 * CAL_PX_PER_HOUR
  const height = Math.max((item.range.end - item.range.start) / 60 * CAL_PX_PER_HOUR, 12)
  const widthPct = 100 / item.totalCols
  const leftPct = item.col * widthPct
  item.height = height // used by template to decide whether to show the time line
  return {
    top: top + 'px',
    height: height + 'px',
    left: `calc(${leftPct}% + 2px)`,
    width: `calc(${widthPct}% - 4px)`,
    background: tint(cat.hex, 0.22),
    borderLeftColor: cat.hex,
    color: darken(cat.hex, 0.5)
  }
}

/* close open color popover when clicking elsewhere */
onMounted(() => {
  document.addEventListener('click', () => {
    if (openColorPickerBlockId.value !== null) {
      openColorPickerBlockId.value = null
      addingColorFor.value = null
    }
  })
})
</script>

<style scoped>
.wsched{
  --bg:#e9e0c6;
  --ink:#233420;
  --sub:#6b6142;
  --line:#b7ac82;
  --card:#f3ecd6;
  --gold:#a3812f;

  background:
    radial-gradient(ellipse at top left, rgba(70,90,55,0.06), transparent 55%),
    radial-gradient(ellipse at bottom right, rgba(70,90,55,0.08), transparent 55%),
    var(--bg);
  color:var(--ink);
  font-family:"EB Garamond","Cinzel",Georgia,"Times New Roman",serif;
  padding:2rem 1.25rem 3rem;
  border-radius:6px;
}
.wsched *{ box-sizing:border-box; }

header{ margin:0 0 1.5rem; border-bottom:2px solid var(--line); padding-bottom:0.75rem; }
h1{ font-family:"Cinzel","EB Garamond",serif; font-size:1.5rem; font-weight:700; margin:0 0 0.3rem; letter-spacing:0.02em; }
.sub{ color:var(--sub); font-size:0.92rem; font-style:italic; }

.legend{ margin:0 0 1rem; display:flex; flex-wrap:wrap; gap:1.25rem; align-items:center; }
.legend .item{ display:inline-flex; align-items:center; gap:0.4rem; font-size:0.8rem; color:var(--sub); }
.swatch-dot{ width:9px; height:9px; border-radius:50%; flex:none; display:inline-block; }

.tabs{ margin:0 0 1rem; display:flex; gap:6px; }
.tab-btn{
  font-family:"Cinzel",serif; font-size:0.72rem; letter-spacing:0.04em; padding:7px 16px; border-radius:4px;
  border:1px solid var(--line); background:var(--card); color:var(--sub); cursor:pointer;
}
.tab-btn.active{ background:var(--ink); color:var(--bg); border-color:var(--ink); }
.tab-btn:not(.active):hover{ border-color:var(--gold); color:var(--ink); }

.toolbar{ margin:0 0 1.5rem; display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap; }
.toolbar button.reset{
  font-size:0.78rem; padding:6px 12px; border-radius:4px;
  border:1px solid var(--line); background:var(--card); color:var(--sub); cursor:pointer;
}
.toolbar button.reset:hover{ border-color:var(--gold); color:var(--ink); }
.hint{ font-size:0.78rem; color:var(--sub); font-style:italic; }

.body-layout{ display:flex; gap:28px; align-items:flex-start; }
.main-col{ flex:1; min-width:0; }

/* sidebar */
.sidebar{ width:250px; flex:none; position:sticky; top:1.5rem; display:flex; flex-direction:column; gap:20px; }
.panel{ background:var(--card); border:1px solid var(--line); border-radius:5px; padding:14px; box-shadow:inset 0 0 0 3px var(--bg); }
.panel h2{ font-family:"Cinzel",serif; font-size:0.76rem; font-weight:600; letter-spacing:0.03em; margin:0 0 10px; text-transform:uppercase; }
.day-picker{ display:flex; gap:3px; margin-bottom:8px; flex-wrap:wrap; }
.day-picker button{ flex:1; min-width:26px; font-size:0.7rem; padding:4px 0; border-radius:3px; border:1px solid var(--line); background:var(--bg); color:var(--sub); cursor:pointer; }
.day-picker button.active{ background:var(--ink); color:var(--bg); border-color:var(--ink); }
.notes-area{
  width:100%; min-height:140px; resize:vertical; font-family:"EB Garamond",serif; font-size:0.9rem;
  border:1px solid var(--line); border-radius:4px; padding:8px; background:var(--bg); color:var(--ink);
}
.todo-add{ display:flex; gap:5px; margin-bottom:8px; }
.todo-add input{ flex:1; font-size:0.85rem; font-family:inherit; padding:6px 7px; border-radius:4px; border:1px solid var(--line); min-width:0; }
.todo-add button{
  font-family:"Cinzel",serif; font-size:0.7rem; letter-spacing:0.03em; padding:6px 10px; border-radius:4px; border:1px solid var(--ink);
  background:var(--ink); color:var(--bg); cursor:pointer; flex:none;
}
.todo-list{ display:flex; flex-direction:column; gap:5px; }
.todo-item{ display:flex; align-items:flex-start; gap:6px; }
.todo-item input[type="checkbox"]{ margin-top:3px; flex:none; }
.todo-item .txt{ flex:1; font-size:0.8rem; line-height:1.3; outline:none; word-break:break-word; }
.todo-item .txt.done{ text-decoration:line-through; color:var(--sub); }
.todo-item .del{ flex:none; border:none; background:none; color:var(--sub); cursor:pointer; font-size:12px; width:16px; height:16px; border-radius:50%; }
.todo-item .del:hover{ background:rgba(0,0,0,0.08); color:var(--ink); }
.todo-empty{ font-size:0.76rem; color:var(--sub); }

/* list view */
.grid{ display:grid; grid-template-columns:repeat(7, 1fr); gap:10px; }
.day{ display:flex; flex-direction:column; gap:6px; }
.day-label{
  font-family:"Cinzel",serif; font-size:0.74rem; font-weight:600;
  text-transform:uppercase; letter-spacing:0.05em; padding:0 2px 5px; border-bottom:2px solid var(--line); margin-bottom:2px;
}
.block-list{ display:flex; flex-direction:column; gap:6px; min-height:24px; }
.block{ position:relative; border-radius:4px; padding:8px 24px 8px 22px; border-left:3px solid transparent; cursor:grab; }
.block .name{ font-size:0.82rem; font-weight:600; line-height:1.25; }
.block .time{ font-size:0.74rem; opacity:0.85; margin-top:1px; }

[contenteditable="true"]{ outline:none; border-radius:3px; }
[contenteditable="true"]:hover{ box-shadow:0 0 0 1px currentColor; }
[contenteditable="true"]:focus{ box-shadow:0 0 0 1px currentColor; background:rgba(255,255,255,0.5); }

.remove-btn{
  position:absolute; top:5px; right:5px; width:16px; height:16px; line-height:14px; text-align:center;
  border-radius:50%; border:none; cursor:pointer; background:rgba(0,0,0,0.08); color:inherit;
  font-size:12px; padding:0; opacity:0; transition:opacity 0.1s;
}
.block:hover .remove-btn{ opacity:0.7; }
.remove-btn:hover{ opacity:1 !important; background:rgba(0,0,0,0.18); }

.color-btn{ position:absolute; top:9px; left:6px; width:11px; height:11px; border-radius:50%; border:1px solid rgba(0,0,0,0.2); padding:0; cursor:pointer; }

.color-popover{
  position:absolute; top:calc(100% + 4px); left:0; z-index:30; background:var(--card); border:1px solid var(--line);
  border-radius:8px; padding:8px; width:190px; box-shadow:0 4px 14px rgba(0,0,0,0.12); color:var(--ink);
}
.color-row{ display:flex; align-items:center; gap:6px; padding:3px 2px; border-radius:5px; }
.color-row:hover{ background:var(--bg); }
.color-row input[type="color"]{ width:18px; height:18px; padding:0; border:none; background:none; cursor:pointer; flex:none; }
.color-row .cat-label{ flex:1; font-size:0.78rem; text-align:left; background:none; border:none; cursor:pointer; padding:2px 0; color:var(--ink); }
.color-popover hr{ border:none; border-top:1px solid var(--line); margin:6px 0; }
.add-color-row{ display:flex; gap:6px; align-items:center; }
.add-color-row input[type="text"]{ flex:1; font-size:0.76rem; padding:4px 5px; border-radius:5px; border:1px solid var(--line); min-width:0; }
.add-color-row button{ font-size:0.72rem; padding:4px 7px; border-radius:5px; border:1px solid var(--line); background:var(--bg); cursor:pointer; flex:none; }
.add-new-color-btn{
  width:100%; text-align:center; border:1px dashed var(--line); background:transparent; border-radius:5px;
  padding:4px; font-size:0.74rem; cursor:pointer; color:var(--sub);
}
.add-new-color-btn:hover{ border-color:var(--gold); color:var(--ink); }

.empty-day{
  flex:1; min-height:60px; display:flex; align-items:center; justify-content:center; text-align:center;
  background:var(--bg); border:1px dashed var(--line); border-radius:4px; color:var(--sub); font-size:0.78rem; font-style:italic; padding:1rem;
}

.add-block-btn{
  margin-top:2px; padding:6px 8px; border-radius:4px; border:1px dashed var(--line); background:transparent;
  color:var(--sub); font-size:0.76rem; cursor:pointer; text-align:center;
}
.add-block-btn:hover{ border-color:var(--gold); color:var(--ink); }

.add-form{ display:flex; flex-direction:column; gap:5px; border:1px solid var(--line); border-radius:4px; padding:8px; background:var(--card); }
.add-form select, .add-form input[type="text"]{
  font-size:0.78rem; padding:5px 6px; border-radius:3px; border:1px solid var(--line); font-family:inherit; width:100%;
}
.add-form .row{ display:flex; gap:5px; }
.add-form .row button{ flex:1; font-size:0.76rem; padding:5px 6px; border-radius:3px; border:1px solid var(--line); background:var(--bg); cursor:pointer; }
.add-form .row button.primary{ background:var(--ink); color:var(--bg); border-color:var(--ink); }

/* calendar view */
.cal-wrap{ overflow-x:auto; }
.cal-grid{ display:grid; grid-template-columns:46px repeat(7, minmax(110px,1fr)); min-width:900px; }
.cal-header-cell{
  font-size:0.76rem; font-weight:600; color:var(--sub); text-transform:uppercase; letter-spacing:0.04em;
  text-align:center; padding-bottom:6px; border-bottom:1px solid var(--line);
}
.cal-axis{ position:relative; }
.cal-axis-label{ position:absolute; right:8px; transform:translateY(-50%); font-size:0.68rem; color:var(--sub); white-space:nowrap; }
.cal-day-col{ position:relative; border-left:1px solid var(--line); }
.cal-block{ position:absolute; border-radius:6px; border-left:3px solid transparent; padding:2px 5px; overflow:hidden; box-sizing:border-box; }
.cal-block .name{ font-size:0.68rem; font-weight:600; line-height:1.15; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.cal-block .time{ font-size:0.6rem; opacity:0.85; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.cal-unscheduled{ margin:1rem 0 0; font-size:0.76rem; color:var(--sub); }
.cal-unscheduled b{ color:var(--ink); }

@media (max-width: 1100px){
  .body-layout{ flex-direction:column; }
  .sidebar{ width:100%; position:static; flex-direction:row; flex-wrap:wrap; }
  .panel{ flex:1; min-width:240px; }
}
@media (max-width: 900px){
  .grid{ grid-template-columns:1fr; }
  .day-label{ font-size:0.85rem; padding-top:0.5rem; }
}
</style>
