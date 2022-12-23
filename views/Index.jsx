const React = require('react')
const myStyle = {
    color: '#a83232',
    backgroundColor: '#ffffff'
}
class Index extends React.Component {
    render() {
        return (
            <>
            <h1> See All the PokeMon</h1>
            <div style={myStyle}>My First React Index Component!</div>
            </>
        )
    }
};
module.exports = Index;