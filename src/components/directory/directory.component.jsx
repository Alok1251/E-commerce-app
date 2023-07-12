import React  from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://pixabay.com/images/download/woman-6059236_640.jpg',
                    id : 1
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://pixabay.com/get/g1097381c04fdb7a7f33826aeab784ddc09b0d363f8aa9305b1985733b2ecbddc69cd97e096bb13fbd36e72cd77672512_640.jpg',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://pixabay.com/get/gf813ea7b2d61adbd1080df6fe202599857da22b54f1bf735519aa3f415d63fa63c90b199c902dd5800e9d48ee9ff00df_640.jpg',
                    id: 3
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://pixabay.com/get/g6147f775e319523be6d00e53c63770dbe609575ecf94a3567417b3524d9b34bc6b9875ffcfba00b81021f314b8a53d2a_640.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://pixabay.com/get/gd692b686e50eccc7b4c48c495ef74be2958c7a6382a3b581c7bb5c99609b3f6e414e0165dc15aebc063309f32ed6f2cb_640.jpg',
                    size: 'large',
                    id: 5
                }

            ]            
        }
    }
    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({title,imageUrl,id,size}) => 
                    (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>)
                )}
            </div>
        )
    }
}
export default Directory;