function InputForm(props) {  
    return (
      <input type={props.type} name={props.name} id={props.id} class="form-control" pattern={props.pattern} minLength={props.minLength} maxLength={props.maxLength} required
        placeholder={props.placeholder} onChange={props.onChange}/>
    );
}

export default InputForm;