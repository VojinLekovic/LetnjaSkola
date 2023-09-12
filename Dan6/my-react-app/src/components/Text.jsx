export const Text = ({name = 'Vojin', country = 'VL'})=>{
    
    return<>
        <h1 className='first-h1' style={{backgroundColor: 'lime', fontSize: 48}}>Hello World!</h1>
        <h2 onClick={() =>console.log('Hi')}>{name} <span>Lekovic</span> - <span>VL</span></h2>
        <p dangerouslySetInnerHTML={{__html: '<b>Monday Funday :)</b>'}}></p>    
    </>
}