class LocalCouncilElectionStore {
  constructor(data = { positions: [] }) {
    this.data = data;
  }

  find(slug) {
    return this.data.positions.find(position => position.slug === slug);
  }

  all() {
    return this.data.positions;
  }

  candidates(positionSlug) {
    let position = this.find(positionSlug);
    if (position === undefined) { return [] }
    return position.candidates;
  }

  candidate(positionSlug, candidateSlug) {
    return this.candidates(positionSlug).find(candidate => candidate.slug === candidateSlug);
  }
}

module.exports = LocalCouncilElectionStore;