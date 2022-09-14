import style from './Message.module.css'

export const Message = (props) => {
    const text = 'dadada'
    return <p className={style.Message}><span style={{color: 'red'}}>{text}</span> and <span className="parent">{props.text}</span></p>
}