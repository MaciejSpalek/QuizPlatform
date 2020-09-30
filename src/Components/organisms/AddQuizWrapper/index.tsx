import React, { useEffect, useState } from 'react'
import { StyledContainter } from './index.styled'
import Label from '../../atoms/Label'
import Input from '../../atoms/Input'
import FormField from '../../../templates/FormFieldTemplate/FormFieldTemplate'
import QuizThumbnail from '../../molecules/QuizTestimonial'
import CategorySelect from '../../molecules/SelectInput'
import ColorSelect from '../../molecules/SelectInput'
import { OptionType } from '../../molecules/SelectInput/SelectInput.model'
import { 
  PersonIcon, 
  GamesIcon, 
  MoviesIcon,
  ScienceIcon,
  AnimalIcon,
  HistoryIcon,
  MusicIcon,
  GeographyIcon,
  YouTubeIcon
} from '../../../assets'

const AddQuizWrapper = () => {
  const [color, setColor] = useState('#00D952');
  const [name, setName] = useState('Example title');
  const [author, setAuthor] = useState('Author');
  const [image, setImage] = useState('Author');
  const [score, setScore] = useState('0/12');


  const handleColor = (colorValue: string | undefined) => {
    if(colorValue) {
      setColor(colorValue)
    }
  }

  const handleTitle = (title: string) => {
    if(title) {
      setName(title)
    } else {
      setName('Example title')
    }
  }

  useEffect(() => {
    console.log()
  }, [])
  
  return (
    <StyledContainter>
      <QuizThumbnail 
        parameters={{
          name,
          author,
          image,
          score,
          color
        }}
      />
      <FormField>
        <Label 
          text="Title"
          forText="title"
        />
        <Input 
          id="title"
          type="text"
          onChange={(e: any) => handleTitle(e.target.value)}
        />
      </FormField>
      <ColorSelect 
        options={[
          {id: "1", title: "Green", value: "#00D952"},
          {id: "2", title: "Orange", value: "rgb(230, 157, 0)"},
          {id: "3", title: "Blue", value: " rgb(0, 61, 230)"},
          {id: "4", title: "Red", value: "rgb(230, 0, 0)"},
          {id: "5", title: "Purple", value: "#A24CCD"},
        ]}
        selectCaption="Select color"
        type={OptionType.COLOR}
        handleOnClick={(color) => handleColor(color().value)}
      />
      <CategorySelect 
        options={[
          {id: "1", title: "Person", icon: PersonIcon},
          {id: "2", title: "Games", icon: GamesIcon},
          {id: "3", title: "Movies", icon: MoviesIcon},
          {id: "4", title: "Science", icon: ScienceIcon},
          {id: "5", title: "Animal", icon: AnimalIcon},
          {id: "6", title: "History", icon: HistoryIcon},
          {id: "7", title: "Music", icon: MusicIcon},
          {id: "8", title: "Geography", icon: GeographyIcon},
          {id: "9", title: "YouTube", icon: YouTubeIcon},
        ]}
        selectCaption="Select category"
        type={OptionType.ICON}
        handleOnClick={(value) => value()}
      />
    </StyledContainter>  
  )
}  

export default AddQuizWrapper

