var Secret = React.createClass({
    render: function() {
        return (
            <div>Secret <input type='text' size='20' maxlength='20' /></div>
        );
    }
});
var Time = React.createClass({
    render: function() {
        return (
            <div>Time <label><input type='radio'/> current time</label><br/>
                      <label><input type='radio'/> <input type='number' min='0' /></label>
            </div>
            );
    }
});

var TimeStep = React.createClass({
    render: function() {
        return (
            <label>X <input type='number' min='0' /></label>
        );
    }
});

var InitialTime = React.createClass({
    render: function() {
        return (
            <label>T0 <input type='number' min='0' /></label>
        );
    }
});

var T = React.createClass({
    render: function() {
        return (
            <label>T <input type='number' min='0' /></label>
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
            <span>offset NNN</span>
        );
    }
});
var DBC1 = React.createClass({
    render: function() {
        return (
            <label>DBC1 <input type='text' size='8' maxlength='8' /></label>
        );
    }
});
var DBC2 = React.createClass({
    render: function() {
        return (
            <label>DBC2 <input type='text' size='8' maxlength='8' /></label>
        );
    }
});
var Decimal  = React.createClass({
    render: function() {
        return (
            <label>DBC2 in decimal <input type='number' min='0' size='10' /></label>
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
            <div>
                <Hmac />
                <Offset />
                <DBC1 />
                <DBC2 />
                <Decimal />
                <TOTP />
            </div>
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
