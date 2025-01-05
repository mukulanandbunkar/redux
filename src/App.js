
import './App.css';
import GrandParent from './component/GrandParent';
['type', 'isAdmin']

const src = {
   type : 'folder',
    component : {
      isAdmin: ['mukul', 'vedash']
      type: 'folder',
      GrandParent : {
        GrandParentsx: {
          type: 'file'
        },
      GrandParentCss  :{

      }
      }
    }
}

const file = {
  name: 'src',
  type: 'folder',
  children: [{
    name: 'component',
    type: 'folder',
    children: [{
      name:'Granparent.tsx',
      type: 'file'
    }, {
      name: 'Grandparent.css',
      type: 'file'
    }]
  }]
}

// folder ---> 


const FolderStructure =  ({file}) => {
  return file.children.map((ele) => {
    if(type === 'folder') {
      return <FolderStructure file={ele} />
    } else {
      return <div>{ele.name}</div>
    }
  })
}

function App() {
  return (
    <div className="App">
     <FolderStructure file = {file}/>
    </div>
  );
}

export default App;
