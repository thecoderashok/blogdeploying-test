import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')
const designDirectory = path.join(process.cwd(), 'posts/designPosts')
const engineeringDirectory = path.join(process.cwd(), 'posts/engineering')


const designCategory = 'design';
const engineeringCategory = 'engineering';


// Gets all articles data and sorts them by most recent date
export function getSortedPostsData() {

  const designFileNames = fs.readdirSync(designDirectory)
  const engineeringFileNames = fs.readdirSync(engineeringDirectory)

// All posts 
  const designFilesData = designFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(designDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    // Set the category
    const category = 'design'
    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })


  const engineeringFilesData = engineeringFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(engineeringDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    // Set the category
    const category = 'engineering'
    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

 
  // Concatenate each articles data in one array
  const allPostsData = designFilesData.concat(engineeringFilesData);
  
  // Sort articles by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
} // END - getSortedPostsData()



// Separate posts 


export function getEngineeringPosts(){
  const engineeringFileNames = fs.readdirSync(engineeringDirectory)

  const engineeringFilesData = engineeringFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(engineeringDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    // Set the category
    const category = 'engineering'
    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  const EngineeringPostsData = engineeringFilesData;

  return EngineeringPostsData;
}


export function getDesignPosts(){
  const designFileNames = fs.readdirSync(designDirectory)

  const designFilesData = designFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(designDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    // Set the category
    const category = 'design'
    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  const DesignPostsData = designFilesData;

  return DesignPostsData;
}

// Get all the post IDs
export function getAllPostIds() {
  // Get file names under each categories directory
  const designFileNames = fs.readdirSync(designDirectory)
  const engineeringFileNames = fs.readdirSync(engineeringDirectory)
  

 
  let categoryNames = [];

  // Loop through each xxxFileNames array. 
  // Add relevant category name to categoryNames array

  engineeringFileNames.forEach(function(engineeringFileName) {
    categoryNames.push(engineeringCategory);
  })

  designFileNames.forEach(function(designFileName) {
    categoryNames.push(designCategory);
  })
 
  
  // Concatenate each articles name in one array (id)
  const fileNames = engineeringFileNames.concat(designFileNames);

  // Combine categoryNames & fileNames arrays. [{ categoryName: 'low-back-pain', id: 'low-back-pain-1.md' }, etc]
  const postParams = categoryNames.map(function(e,i){return{categoryName:e,id:fileNames[i]}});
  
  // Loop through postParams. Output variable params
  return postParams.map(postParam => {
    return {
      params: {
        category: postParam.categoryName,
        id: postParam.id.replace(/\.md$/, '')
      }
    }
  })

}

// Get relevant post data
export async function getPostData(category ,id) {
    // Set the relevant /posts file path using category and id in the query params    
    const fullPath = path.join(postsDirectory, `${category}`, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    console.log(matterResult);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
    
}




