import {$, React, tr} from '../libs';
import Component from './Component';

export default class Pagination extends Component {

  static pagesList(active, pages) {
    const r = [], d = 2;
    for(let p = 0; p<pages; ++p) {
      if(Math.abs(active-p)<d || p<d || pages-1-p<d || p<2*d+1 && active<2*d || p>pages-1-(2*d+1) && active>pages-1-(2*d)) {
        r.push(p);
      }
    }
    return r;
  }

  onClick(e) {
    e.preventDefault();
    const page = parseInt($(e.target).attr('data'));
    if(page!==this.props.visiblePage) {
      this.props.setVisiblePage(page);
    }
  }

  render() {
    const {visiblePage, itemsPerPage, children} = this.props,
          pages = Math.ceil(children.length/itemsPerPage),
          page = Math.max(0, Math.min(visiblePage, pages-1)),
          lower = page*itemsPerPage,
          upper = (page+1)*itemsPerPage,
          ll = Math.max(page-1,0),
          rr = Math.min(page+1, pages-1);
    return (
      <div class="paged-container">
        <div class="items">
          <div class="hidden">
            {children.filter((item, i)=> i<lower)}
          </div>
          <div class="visible">
            {children.filter((item, i)=> i>=lower&&i<upper)}
          </div>
          <div class="hidden">
            {children.filter((item, i)=> i>=upper)}
          </div>
        </div>
        <nav aria-label="Page navigation">
          <div class="text-center">
            <ul class="pagination">
              <li class={page<1? 'disabled': ''}>
                <a onClick={this.onClick.bind(this)} data={ll} title={tr('Previous')}>
                  <span data={ll} aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {Pagination.pagesList(page, pages).map((p)=> <li key={p} class={p===page? 'active': ''}><a onClick={this.onClick.bind(this)} data={p}>{p+1}</a></li>)}
              <li class={page>=pages-1? 'disabled': ''}>
                <a onClick={this.onClick.bind(this)} data={rr} title={tr('Next')}>
                  <span data={rr} aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
