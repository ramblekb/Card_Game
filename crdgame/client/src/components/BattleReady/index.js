import React, { Component } from "react";

class BattleReady extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        allUsers: [],
        numUsers: 0,
        firebaseId: "",
        userId: ""
    };
    componentDidMount() {
        
        this.loadUsers();
    }

    loadUsers = () => {
        let self = this
        self.props.firebase.connectedRef().on("value", function (snap) {

            if (snap.val()) {
console.log(self)
                var con = self.props.firebase.connectionsRef().push(true);

                con.onDisconnect().remove();
            }
        });

        self.props.firebase.connectionsRef().on("value", function (snapshot) {
            self.setState({ numUsers: snapshot.numChildren() })
        });
    }

    render() {
        return (
            <div class="row">
                <div class="col m12">
                    <div class="card">
                        <ul class="collection with-header">
                            <li class="collection-header"><h4><span class="badge">{this.state.numUsers}</span>Pick Your Opponent</h4></li>
                            <li class="collection-item"><div>Alv<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                            <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                            <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                            <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };

};

export default BattleReady;