import React, {Component} from 'react';
import classnames from 'classnames';

class GameForm extends Component {
    state={
        title:this.props.game ? this.props.game.title : '',
        cover:this.props.game ? this.props.game.cover : '',
        _id:this.props.game ? this.props.game._id : null,
        errors:{},
        loading: false,
    }

    componentWillReceiveProps =(nextProps)=>{
        if(nextProps.game){
            this.setState({
                _id:nextProps.game._id,
                title: nextProps.game.title,
                cover: nextProps.game.cover
            });
        }else{
            this.setState({
                _id:null,
                title: '',
                cover: ''
            });
        }
    }


    handleChange = (e) =>{
        if (!!this.state.errors[e.target.name]){
            let errors = Object.assign({},this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        }else{
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        //validation
        let errors={};
        if (this.state.title === "") errors.title='Title cant be empty...';
        if (this.state.cover === "") errors.cover='Cover cant be empty...';

        this.setState({errors});
        const isValid = Object.keys(errors).length === 0;
        if (isValid){
            const {_id, title, cover} = this.state;
            this.setState({loading: true});
            this.props.saveGame({_id,title,cover});
                /*.catch((err) => {
                this.setState({errors: err.response.data.errors, loading: false});});*/

        }
    }

    render(){
        const form =(<form className={classnames('ui', 'form',{loading: this.state.loading})} onSubmit={this.handleSubmit}>
            <h1>Add new game</h1>

            {!!this.state.errors.global && <div className="ui negative message">
                <p>{this.state.errors.global}</p>
            </div>}

            <div className={classnames('field', {error: !!this.state.errors.title})}>
                <label htmlFor="title">Title</label>
                <input name="title"
                       value={this.state.title}
                       onChange={this.handleChange}
                       id="title"/>
                <span>{this.state.errors.title}</span>
            </div>

            <div className={classnames('field', {error: !!this.state.errors.cover})}>
                <label htmlFor="cover">Cover URL</label>
                <input name="cover"
                       value={this.state.cover}
                       onChange={this.handleChange}
                       id="cover"/>
                <span>{this.state.errors.cover}</span>
            </div>

            <div>
                {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image"/>}

            </div>

            <div className="field">
                <button className="ui primary button">Save</button>
            </div>
        </form>);
        return (<div className="ui container">
            {form}
        </div>);
    }
}

export default GameForm;
