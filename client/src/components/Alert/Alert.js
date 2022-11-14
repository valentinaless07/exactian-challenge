import Swal from "sweetalert2"

const Alert = (msg, icon, color) => {
    Swal.fire({title: msg, color, confirmButtonColor: "#323232", icon})
}

export default Alert