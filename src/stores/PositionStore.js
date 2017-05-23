class PositionStore {
  constructor(data = { positions: [] }) {
    this.data = data;
  }

  find(slug) {
    return this.data.positions.find(position => position.slug === slug);
  }

  all() {
    return this.data.positions;
  }
}

module.exports = PositionStore;