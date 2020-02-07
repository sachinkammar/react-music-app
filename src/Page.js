import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';

function Page({ 
  children, 
  background,
  location: {
    state,
  },
}) {
  const cx = classNames({
    page: true,
    'page--prev': state && state.prev,
    background
  });
  return (
    <section 
      className={cx}
    >
      {children}
    </section>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
};

export default withRouter(Page);