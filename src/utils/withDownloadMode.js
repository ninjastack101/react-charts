import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

/**
 * An HOC that injects downloadMode property in wrapped component
 * by checking the search query.
 */
const withDownloadMode = WrappedComponent => {
  class DownloadableWrapper extends React.Component {
    static WrappedComponent = WrappedComponent;
    static displayName = `withDownloadMode(${WrappedComponent.displayName
      || WrappedComponent.name
      || 'Component'})`;

    downloadableQueryPaths = [
      '?format=jpeg',
    ];

    /**
     * Function to check whether current search query is
     * one of the downloadable queries of not.
     */
    isDownloadMode = () => {
      const searchQuery = this.props.location.search;

      if (searchQuery) {
        return this.downloadableQueryPaths.includes(searchQuery);
      }

      return false;
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          downloadMode={this.isDownloadMode()}
        />
      );
    }
  }

  return hoistNonReactStatics(DownloadableWrapper, WrappedComponent);
};

export default withDownloadMode;
