import { Input, Label, Wrapper } from './FilterForm.styled'
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice'


export const FilterForm = () => {
    const dispatch = useDispatch()
    
    const onChange = (e) => {
                dispatch(setFilter(e.currentTarget.value.toLowerCase().trim()))
           }
       return (
        <Wrapper>
            <Label htmlFor="">Find contacts name
                <Input type="text"  onChange={onChange} />
            </Label>
        </Wrapper>
    )
}


