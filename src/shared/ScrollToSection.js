import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToSection extends Component {
  componentDidMount() {
    this.scrollToCurrentSection({ behavior: 'instant' });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.scrollToCurrentSection();
    }
  }

  scrollToCurrentSection(options = { behavior: 'smooth' }) {
    if (this.props.location.state && this.props.location.state.scroll === false) { return }
    const slug = this.props.location.pathname.replace('/', '');
    if (slug.length === 0) { return }
    const section = window.document.querySelector(`#${slug}`);
    if (!section) { return }

    section.scrollIntoView(options);
  }

  render() {
    return this.props.children;
  }
}

const ScrollToSectionWithRouter = withRouter(ScrollToSection);

export default ScrollToSectionWithRouter;