export default {
  formatPrice (price) {
    if (price && typeof price === 'number') {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '₫'
    }
    return price
  }
}
