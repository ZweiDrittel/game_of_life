import React from 'react';

interface WindowProps {
    write: string,
}

class MainWindow extends React.Component<WindowProps> {

    render() {
      return <h1>{this.props.write}</h1>;
    }
  }

export default MainWindow;