var Secret = React.createClass({
    render: function() {
        return (
            <div id="secret">Secret <input type='text' size='20' maxlength='20' /></div>
        );
    }
});
var Time = React.createClass({
    componentWillMount: function() { this.intervals = []; },
    componentDidMount: function() {
        this.intervals.push(setInterval(this.tick, 100));
    },
    componentWillUnmount: function() { this.intervals.map(clearInterval); },
    getInitialState: function() {
        return {
            t: this.getT(),
            current: true,
        };
    },
    tick: function() {
        if (!this.state.current) return;

        this.setState({ t: this.getT() });
    },
    getT: function() {
        return Math.floor((new Date()).getTime() / 1000);
    },
    onRadioChanged: function(e) {
        this.setState({ current: e.currentTarget.name === 'current' });
    },
    onFocus: function(e) {
        this.setState({ current: false });
        e.select();
    },
    onTimeChanged: function(e) {
        this.setState({ t: e.target.value })
    },
    render: function() {
        return (
            <div>Time
                <div>
                    <label>
                        <input type='radio' name='current' checked={this.state.current} onChange={this.onRadioChanged}/>
                        current time
                    </label>
                    <br/>
                    <label>
                        <input type='radio' name='specific' checked={!this.state.current} onChange={this.onRadioChanged}/> 
                        <input type='number' min='0' value={this.state.t} onFocus={this.onFocus} onChange={this.onTimeChanged}/>
                    </label>
                </div>
            </div>
            );
    }
});

var TimeStep = React.createClass({
    render: function() {
        return (
            <div><label>X <input type='number' min='0' /></label></div>
        );
    }
});

var InitialTime = React.createClass({
    render: function() {
        return (
            <div><label>T0 <input type='number' min='0' /></label></div>
        );
    }
});

var T = React.createClass({
    render: function() {
        return (
            <div><label>T <input type='number' min='0' /></label></div>
        );
    }
});
var Inputs = React.createClass({
    render: function() {
        return (
            <div>
                <Secret />

                <Time />
                <TimeStep />
                <InitialTime />
                <T />

            </div>
        );
    }
});

var Hmac = React.createClass({
    render: function() {
        return (
            <label><h2>HmacSHA1(secret, T)</h2>
                <input type='text' size='40' maxlength='40' />
            </label>
        );
    }
});
var Offset = React.createClass({
    render: function() {
        return (
            <div>offset NNN</div>
        );
    }
});
var DBC1 = React.createClass({
    render: function() {
        return (
            <div><label>DBC1 <input type='text' size='8' maxlength='8' /></label></div>
        );
    }
});
var DBC2 = React.createClass({
    render: function() {
        return (
            <div><label>DBC2 <input type='text' size='8' maxlength='8' /></label></div>
        );
    }
});
var Decimal  = React.createClass({
    render: function() {
        return (
            <div><label>DBC2 in decimal <input type='number' min='0' size='10' /></label></div>
        );
    }
});
var TOTP = React.createClass({
    render: function() {
        return (
            <label><h1>TOTP <input type='number' min='0' /></h1></label>
        );
    }
});
var Truncate = React.createClass({
    render: function() {
        return (
            <fieldset>
                <legend>Truncate</legend>
                <Hmac />
                <Offset />
                <DBC1 />
                <DBC2 />
                <Decimal />
                <TOTP />
            </fieldset>
        );
    }
});
var TOTPDemo = React.createClass({
    render: function() {
        return (
            <div><Inputs /><Truncate /></div>
        );
    }
});

React.render(
        <TOTPDemo />,
        document.body
);
