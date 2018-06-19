import React from 'react';

export default class Back extends React.Component {
    render() {
        const { setActive } = this.props;

        return (
            <div>
                <div
                    className="Back"
                    onClick={setActive}
                    style={{
                        width: 40,
                        height: 32,
                        lineHeight: "32px",
                        position: "fixed",
                        zIndex: 100,
                        top: 10,
                        left: 10,
                        cursor: "pointer",
                        backgroundColor: "#fff",
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "bold",
                        borderRadius: 4,
                    }}
                >
                    &#60;
                </div>
            </div>
        );
    }
}