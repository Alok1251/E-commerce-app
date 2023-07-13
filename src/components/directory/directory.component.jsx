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
                    imageUrl: 'https://i.postimg.cc/QdZQ59RH/fashion-2309519.jpg',
                    id : 1
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://i.postimg.cc/7P7dy7ML/man-2425121.jpg',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.postimg.cc/L5t1VRYj/feet-1842328.jpg',
                    id: 3
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://i.postimg.cc/YSZqGgsP/women-1487825.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://i.postimg.cc/pV8MC3my/men-1835901.jpg',
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