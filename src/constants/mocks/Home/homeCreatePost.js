// components
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const CREATE_POST_ICONS = [
    {
        icon: <InsertPhotoOutlinedIcon style={{ color: '#0078FF' }} />,
        text: 'Photo',
    },
    {
        icon: <SmartDisplayIcon style={{ color: '#4CAF50' }} />,
        text: 'Video',
    },
    {
        icon: <ArticleOutlinedIcon style={{ color: '#E06847' }} />,
        text: 'Write article',
    }
];

export { CREATE_POST_ICONS };