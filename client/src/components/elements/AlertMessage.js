import 'scss/elements/alert-message.scss';

export default function AlertMessage({ show, children}) {
  return (
    <div className={show ? 'alert-message active' : "alert-message"}>
      <div className="alert-message-content">
        {children}
      </div>
    </div>
  );
}