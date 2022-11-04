function puedeSubir(altura, acompafiante, penalizacion) {

    if (penalizacion === true)return false
    else if (altura>=149 && altura<200)return true
    else if (altura>=120 && altura<=140 && (acompafiante = true))return true
}
console.log(puedeSubir(100, false, false));