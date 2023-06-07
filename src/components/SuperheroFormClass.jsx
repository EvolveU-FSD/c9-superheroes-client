import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

class SuperheroFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      alterEgo: ''
    };
  }

  componentDidMount() {
    const { superhero } = this.props;
    if (superhero) {
      this.setState({
        name: superhero.name,
        alterEgo: superhero.alterEgo
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { superhero } = this.props;
    const oldSuperhero = prevProps.superhero;
    if (superhero && superhero !== oldSuperhero) {
      this.setState({
        name: superhero.name,
        alterEgo: superhero.alterEgo
      });
    }
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const superheroValues = {
            alterEgo: this.state.alterEgo,
            name: this.state.name
          };
          this.props.handleSubmit(superheroValues);
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 2,
            gap: 2
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(event) => this.setState({ name: event.target.value })}
            value={this.state.name}
          />
          <TextField
            id="outlined-basic"
            label="Alter Ego"
            variant="outlined"
            onChange={(event) =>
              this.setState({ alterEgo: event.target.value })
            }
            value={this.state.alterEgo}
          />
          <Button type="submit" variant="contained" size="large">
            {this.props.buttonText}
          </Button>
        </Box>
      </form>
    );
  }
}

export default SuperheroFormClass;
