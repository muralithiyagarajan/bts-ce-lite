import React from 'react';
import DashboardSidePanel from '../dashboard/DashboardSidepanel';
import { connect } from 'react-redux';
import './sidepanel.css'

const SidePanels = {
    "DashboardSidePanel": DashboardSidePanel
};

class SidePanel extends React.Component{
    render(){
        const CurrentPanel = SidePanels[this.props.activePanel] || DashboardSidePanel;
        return (
                <CurrentPanel/>
        );
        
    }
    
}

function mapStateToProps(state) {
  return {
    activePanel: state.uiLayout.activePanel
  }
}

export default connect(mapStateToProps)(SidePanel);