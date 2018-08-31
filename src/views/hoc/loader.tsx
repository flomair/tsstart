import * as React from 'react';

interface WithLoadingProps {
    loading: boolean;
  }
  
  const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
    class WithLoading extends React.Component<P & WithLoadingProps> {
      render() {
        const { loading, ...props } = this.props as WithLoadingProps;
        return loading ? <LoadingSpinner /> : <Component {...props} />;
      }
    };

    const LoadingSpinner = () =>{
        return(<div>LoadingSpinner</div>)
    }


    export default withLoading;