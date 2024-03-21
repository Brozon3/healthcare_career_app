import fs from 'fs';

export const updateJSONFile = async (school, programName, certification, duration) => {

    const JSON_FILE_PATH = "../data/data.json";

    try {
        let jsonData;
        try {
            jsonData = fs.readFileSync(JSON_FILE_PATH, 'utf8');
        } catch (error) {
            // Create a new JSON file if it doesn't exist
            jsonData = '{"programs": []}';
        }

        const data = JSON.parse(jsonData);
        const programIndex = data.programs.findIndex(p => p.school === school && p.programName === programName);

        const programObject = {
            school,
            programName,
            certification,
            duration
        };

        if (programIndex !== -1) {
            // Update existing program object
            data.programs[programIndex] = programObject;
        } else {
            // Append new program object
            data.programs.push(programObject);
        }

        // Write updated data back to JSON file
        fs.writeFileSync(JSON_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');

        console.log('JSON file updated successfully');
    } catch (error) {
        console.error('Error updating JSON file:', error);
    }
};
