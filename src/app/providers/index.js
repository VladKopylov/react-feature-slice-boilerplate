import { compose } from 'ramda';
import { withRouter } from './withRouter';

// export const withHocs = compose(withAntd, withRouter, withApollo);
export const withHocs = compose(withRouter);
