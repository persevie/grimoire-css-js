const test = require('ava')
const { start } = require('../index.js')
const fs = require('fs')
const path = require('path')

test('init grimoire css', (t) => {
  const configPath = path.join(__dirname, '../grimoire/config/grimoire.config.json')

  if (fs.existsSync(configPath)) {
    fs.unlinkSync(configPath)
  }

  start('init')

  t.true(fs.existsSync(configPath), 'File grimoire.config.json should be created')
})
