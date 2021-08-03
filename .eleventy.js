const moment = require('moment')

moment.locale('en')

module.exports = function config(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addWatchTarget('src/css')

  /**
   * Eleventy "Filters"
   *
   * https://www.11ty.dev/docs/filters/
   */
  eleventyConfig.addFilter('dateIso', (date) => moment(date).toISOString())
  eleventyConfig.addFilter('dateReadable', (date) =>
    moment(date).utc().format('LL')
  )

  /**
   * Eleventy Shortcodes
   */
  eleventyConfig.addShortcode('excerpt', (article) => extractExcerpt(article))

  return {
    dir: {
      input: 'src',
    },
  }
}

function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    )
    return null
  }

  const content = article.templateContent

  const separatorsList = [
    { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
    { start: '<p>', end: '</p>' },
  ]

  let excerpt
  separatorsList.some((separators) => {
    const startPosition = content.indexOf(separators.start)
    const endPosition = content.indexOf(separators.end)

    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content
        .substring(startPosition + separators.start.length, endPosition)
        .trim()
      return true
    }
  })

  return excerpt
}
