import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')
const chronicPainDirectory = path.join(process.cwd(), 'posts/design')
const lowBackPainDirectory = path.join(process.cwd(), 'posts/productivity')
const neckPainDirectory = path.join(process.cwd(), 'posts/engineering')


const chronicPainCategory = 'design';
const lowBackPainCategory = 'productivity';
const neckPainCategory = 'engineering';


// Gets all articles data and sorts them by most recent date
export function getSortedPostsData() {
  // Get file names under each categories directory
  const chronicPainFileNames = fs.readdirSync(chronicPainDirectory)
  const lowBackPainFileNames = fs.readdirSync(lowBackPainDirectory)
  const neckPainFileNames = fs.readdirSync(neckPainDirectory)
 

  // Get data from Chronic Pain files
  const chronicPainFilesData = chronicPainFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(chronicPainDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'chronic-pain'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  // Get data from Low Back Pain files
  const lowBackPainFilesData = lowBackPainFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(lowBackPainDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'low-back-pain'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  // Get data from Neck Pain files
  const neckPainFilesData = neckPainFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(neckPainDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'neck-pain'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })



  // Concatenate each articles data in one array
  const allPostsData = chronicPainFilesData.concat(lowBackPainFilesData).concat(neckPainFilesData);
  
  // Sort articles by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
} // END - getSortedPostsData()

// Get all the post IDs
export function getAllPostIds() {
  // Get file names under each categories directory
  const chronicPainFileNames = fs.readdirSync(chronicPainDirectory)
  const lowBackPainFileNames = fs.readdirSync(lowBackPainDirectory)
  const neckPainFileNames = fs.readdirSync(neckPainDirectory)


  // Holds all [category] names 
  let categoryNames = [];

  // Loop through each xxxFileNames array. 
  // Add relevant category name to categoryNames array
  chronicPainFileNames.forEach(function(chronicPainFileName) {
    categoryNames.push(chronicPainCategory);
  })
  lowBackPainFileNames.forEach(function(lowBackPainFileName) {
    categoryNames.push(lowBackPainCategory);
  })
  neckPainFileNames.forEach(function(neckPainFileName) {
    categoryNames.push(neckPainCategory);
  })

  
  // Concatenate each articles name in one array (id)
  const fileNames = chronicPainFileNames.concat(lowBackPainFileNames).concat(neckPainFileNames);

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