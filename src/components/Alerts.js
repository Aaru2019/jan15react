import React from 'react'

export default function Alerts(props) {
    return (
        props.myAlerts && <div>
            <div class={`alert alert-${props.myAlerts.type} alert-dismissible fade show`} role="alert">
                {props.myAlerts.messege}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}
