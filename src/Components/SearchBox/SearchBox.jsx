export default function SearchBox({ handleChange }) {
    return <>
        <p>Find contacts by name</p>
        <input onChange={handleChange} type="text" />
    </>
}