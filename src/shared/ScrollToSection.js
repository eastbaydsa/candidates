import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToSection extends Component {
  componentDidMount() {
    this.scrollToCurrentSection();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.scrollToCurrentSection();
    }
  }

  scrollToCurrentSection() {
    const slug = this.props.location.pathname.replace('/', '');
    const section = window.document.querySelector(`#${slug}`)
    if (!section) { return }

    section.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return this.props.children;
  }
}

const ScrollToSectionWithRouter = withRouter(ScrollToSection);

export default ScrollToSectionWithRouter;