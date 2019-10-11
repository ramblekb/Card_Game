import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "./style.css"

class BattleReady extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            numUsers: 0,
            room: "",
            userId: "",
            enemyId: ""
        };
    }
    componentDidMount() {

        this.loadUsers();
    }

    loadUsers = () => {
        let self = this
        let accessString = localStorage.getItem('JWT');
        let id = this.parseJwt(accessString).id
        this.setState({ userId: id })
        self.props.firebase.connectedRef().on("value", function (snap) {


            if (snap.val()) {
                var con = self.props.firebase.connectionsRef().update({
                    [id]:
                        { ready: true, Id: id, enemy: "", room: "", name: "eric" }
                });
                self.props.firebase.connectionsRef().child(id).onDisconnect().remove();
                self.props.firebase.connectionsRef().child(id).on("child_changed", function (snapshot) {
                    var changedPost = snapshot.val();
                    console.log("The updated enemy is " + changedPost);
                    let batt = false
                    if (changedPost.length > 4) {
                     batt = window.confirm("Some one wants to battle, will you?")
                    }
                    if (batt) {
                        self.props.firebase.connectionsRef().child(changedPost).update({ enemy: self.state.userId })
                        self.props.firebase.connectionsRef().child(self.state.userId).on("child_changed", function (snapshot) {
                            var changedPost = snapshot.val();
                            console.log("The updated room " + changedPost);
                            localStorage.setItem("room", changedPost)
                            self.props.firebase.connectionsRef().child(id).remove();
                            return <Redirect to='/battlepage' />
                        })
                    }
                });
            }
        });

        self.props.firebase.connectionsRef().on("child_added", function (childSnapshot, prevChildKey) {
            self.props.firebase.connectionsRef().orderByValue().on("value", function (snapshot) {
                self.setState({ allUsers: [] })
                let array = []
                snapshot.forEach(function (data) {
                    if (data.key !== self.state.userId) {
                        array.push(data.val())
                    }
                });
                self.setState({ allUsers: array })
            });
        });

        self.props.firebase.connectionsRef().on("value", function (snapshot) {
            self.setState({ numUsers: snapshot.numChildren() })
        });
    }

    toBattle = event => {
        // event.preventDefault() 
        let self = this
        let room = Math.floor(Math.random() * 1000)
        self.setState({ room: room })
        let selected = event.currentTarget.attributes.getNamedItem("data-user-id").value
        console.log(selected, this.state.room);
        self.props.firebase.connectionsRef().child(selected).update({ enemy: this.state.userId })
        self.props.firebase.connectionsRef().child(this.state.userId).on("child_changed", function (snapshot) {
            var changedPost = snapshot.val();
            console.log("The updated enemy is " + changedPost);
            self.props.firebase.connectionsRef().child(selected).update({ room: room })
            localStorage.setItem("room", room)
            self.props.firebase.connectionsRef().child(self.state.userId).remove();
            return <Redirect to='/battlepage' />
        });
        var bat = self.props.firebase.battlesRef().update({
            [room]:
            {
                ready: true, Id: Math.random(), enemy: "", turn: "sdfghj"
            }
        });
        self.props.firebase.battlesRef().child(room).onDisconnect().remove();

    }
    parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    };


    render() {
        return (
            <div className="row">
                <div className="col m12">
                    <div className="card" >
                        <ul className="collection with-header">
                            <li className="collection-header"><h4><span className="badge">{this.state.numUsers}</span>Pick Your Opponent</h4></li>
                            {this.state.allUsers.map((line) => {
                                return <li className="collection-item"><div>{line.name}<a href="#!" className="secondary-content"><i className="material-icons" data-user-id={line.id} onClick={this.toBattle}>send</i></a></div></li>
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        )
    };

};

export default BattleReady;