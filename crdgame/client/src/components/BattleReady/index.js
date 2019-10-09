import React, { Component } from "react";
import "./style.css"

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
            console.log("check fb data value -> ", snap.val());
            console.log(snap.val().name);


            if (snap.val()) {
                var con = self.props.firebase.connectionsRef().push(
                    { ready: true, Id: Math.random(), enemy: "sdfghj", name: "eric" 
                });
                con.onDisconnect().remove();
                con.on("child_changed", function(snapshot) {
                    console.log("Hi:" + snapshot.val());
                    con.remove();
                  });
            }
        });
        self.props.firebase.connectionsRef().on("child_added", function (childSnapshot, prevChildKey) {
            console.log(childSnapshot.val());
        });

        self.props.firebase.connectionsRef().on("value", function (snapshot) {
            self.setState({ numUsers: snapshot.numChildren() })
        });
    }

    toBattle = event => {
        // event.preventDefault() 
        let self = this
        let room = Math.floor(Math.random()*1000)
        var bat = self.props.firebase.battlesRef().update({[room]:
            { ready: true, Id: Math.random(), enemy: "sdfghj", turn: "sdfghj" 
        }});
        self.props.firebase.battlesRef().child(room).onDisconnect().remove();
        
    }


    render() {
        return (
            <div class="row">
                <div class="col m12">
                    <div class="card" >
                        <ul class="collection with-header">
                            <li class="collection-header"><h4><span class="badge">{this.state.numUsers}</span>Pick Your Opponent</h4></li>
                            <li class="collection-item"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons" onClick = {this.toBattle}>send</i></a></div></li>
                            <li class="collection-item"><div>Alvi<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                            <li class="collection-item"><div>Alv<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                            <li class="collection-item"><div>Al<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    };

};

export default BattleReady;