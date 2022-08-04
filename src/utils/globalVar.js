export const HEADER_COLOR = `hsl(55.6, 38.3%, 42%)`
export const BODY_COLOR = `hsl(55.6, 38.3%, 62%)`
export const BACKGROUND_COLOR = `hsl(208, 100%, 47.1%)`

export const customColor = (changeLighter, down = false) => {
  if (changeLighter !== undefined && down === false) {
    let changed = 42 + Number(changeLighter)
    return `hsl(55.6, 38.3%, ${changed}%)`
  }

  if (changeLighter !== undefined && down === true) {
    let changed = 42 - Number(changeLighter)
    return `hsl(55.6, 38.3%, ${changed}%)`
  }

  return `hsl(55.6, 38.3%, 42%)`
}
