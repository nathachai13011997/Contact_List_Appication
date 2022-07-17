const methods = {
  calculatingPIT(income) {
    if (income <= 150000) {
      return 0
    } else if (income <= 300000) {
      return (income - 150000) * 0.05
    } else if (income <= 500000) {
      return (income - 300000) * 0.1 + 7500
    } else if (income <= 750000) {
      return (income - 500000) * 0.15 + 27500
    } else if (income <= 1000000) {
      return (income - 750000) * 0.2 + 65000
    } else if (income <= 2000000) {
      return (income - 1000000) * 0.25 + 115000
    } else if (income <= 5000000) {
      return (income - 2000000) * 0.3 + 365000
    } else {
      return (income - 5000000) * 0.35 + 1265000
    }
  }
}

module.exports = { ...methods }
