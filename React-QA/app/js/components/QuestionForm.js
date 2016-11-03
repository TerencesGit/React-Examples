var React = require('react');
module.exports = React.createClass({
	handleForm: function(e){
		e.preventDefault();
		var newQuestion ={
			title: this.refs.title.value,
			description: this.refs.description.value,
			voteCount: 0
		}
		this.refs.form.reset()
		this.props.onNewQuestion(newQuestion)
	},
	render: function(){
		var styleObj = {
			display: this.props.formDisplay ? 'block' : 'none'
		}
		return (
			 <form ref="form" name="addQuestion" className="clearfix" style={styleObj} onSubmit={this.handleForm}>
        <div className="form-group">
          <label htmlFor="qtitle">问题</label>
          <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
        </div>
        <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
        <button type="submit" className="btn btn-success pull-right">确认</button>
        <button type="reset" className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</button>
      </form>
		)
	}
})