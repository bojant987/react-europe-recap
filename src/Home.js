// Import React
import React from 'react';

import btf1 from './assets/battlefield1.jpg';
import camera from './assets/camera.png';
import apollo from './assets/apollo.png';
import reason from './assets/reason.png';
import nope from './assets/nope.png';

const itemStyle = {
    width: 300,
    padding: 10,
    border: "1px solid #000",
    cursor: "pointer",
    backgroundColor: "#fff",
    textAlign: "center",
    height: 248,
    position: "relative",
    transition: "0.4s",
    borderRadius: "4px",
};

const imageStyle = {
    maxWidth: "100%",
    maxHeight: 169,
};

const h4Style = {
    textAlign: "center",
    fontSize: "24px",
    margin: "15px 0",
    color: "#67DBF9",
    position: "absolute",
    bottom: "25px",
    left: 0,
    width: "100%",
    transition: "0.4s",
};

export default class Home extends React.Component {
   render() {
        const { setActive } = this.props;

        return (
            <div className="Home">
                <div style={{
                    padding: 40,
                    display: "flex",
                    margin: "0 auto",
                    width: "100%",
                    flexWrap: "wrap"
                }}>
                    <div style={{
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        flex: "1 0 100%",
                        justifyContent: "space-around",
                        marginBottom: "100px",
                    }}>
                        <div
                            style={itemStyle}
                            className="Item"
                            onClick={() => setActive('apollo')}
                        >
                            <img src={apollo} style={imageStyle}/>
                            <h4 style={h4Style}>GraphQL with Apollo</h4>
                        </div>
                        <div
                            style={itemStyle}
                            className="Item"
                            onClick={() => setActive('visReg')}
                        >
                            <img src={camera} style={imageStyle}/>
                            <h4 style={h4Style}>Visual regression</h4>
                        </div>
                    </div>
                    <div style={{
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        flex: "1 0 100%",
                        justifyContent: "space-around",
                    }}>
                        <div
                            style={itemStyle}
                            className="Item"
                            onClick={() => setActive('reason')}
                        >
                            <img src={reason} style={imageStyle}/>
                            <h4 style={h4Style}>Reason + React</h4>
                            <img src={nope} style={{
                                width: "70%",
                                height: "70%",
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -70%)",
                            }} />
                        </div>
                        <div
                            style={itemStyle}
                            className="Item"
                            onClick={() => setActive('bf1')}
                        >
                            <img src={btf1} style={imageStyle}/>
                            <h4 style={h4Style}>Battlefield 1 + React</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}