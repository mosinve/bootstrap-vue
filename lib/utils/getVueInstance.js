export default function getVueInstance(element) {
    if (element){
        return element.__vue__ || [...element.ownerDocument.getElementsByTagName('*')].find(item=>item.__vue__).__vue__
    }
}
