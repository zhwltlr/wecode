const isEven = () => {
  let result = []
  for (let i = 0; i < 51; i++) {
    i % 2 == 0 ? result.push(i) : null
  }
  return result
}
