import React, {Component} from 'react';


class About extends Component{
    render(){
        return(
          <div style={{marginTop: 20}}>
            <div className="row">
              <div className="col-md-4">
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action active">
                    Cras justo odio
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                    <button type="button" className="list-group-item list-group-item-action">Morbi leo risus</button>
                    <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                    <button type="button" className="list-group-item list-group-item-action">Vestibulum at eros</button>
                </div>
              </div>
              <div className="col-md-8">
                  <h2>Welcome to Details</h2>
                  <hr />
              </div>
            </div>
          </div>
        )
    }
}
export default About;
