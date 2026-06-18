import os
import re

data_file = r"c:\Users\pc\Downloads\shaurya-portfolio-main\shaurya-portfolio-main\src\components\shaurya\data.ts"
assets_dir = r"c:\Users\pc\Downloads\shaurya-portfolio-main\shaurya-portfolio-main\src\assets"

with open(data_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Find all existing imported filenames
imported_files = re.findall(r'import\s+\w+\s+from\s+"@/assets/([^"]+)"', content)
existing_vars = re.findall(r'import\s+(\w+)\s+from\s+"@/assets/[^"]+"', content)

# List all files in assets
all_assets = [f for f in os.listdir(assets_dir) if f.endswith(('.png', '.jpg', '.jpeg', '.webp'))]

new_imports = []
new_projects = []

for asset in all_assets:
    if asset not in imported_files:
        # Generate a valid variable name
        var_name = re.sub(r'[^a-zA-Z0-9]', '', asset.split('.')[0])
        # ensure it's not a duplicate var name or starts with a number
        if var_name[0].isdigit():
            var_name = "img" + var_name
        
        while var_name in existing_vars:
            var_name += "_"
            
        existing_vars.append(var_name)
        
        new_imports.append(f'import {var_name} from "@/assets/{asset}";')
        
        new_projects.append(f'''  {{
    id: "{var_name}",
    title: "New Thumbnail",
    category: "GTA V", // change as needed
    img: {var_name},
    description: "Added from assets.",
    client: "@someone",
    feedback: "Great work!",
    galleryOnly: true,
  }},''')

if not new_imports:
    print("No new imports needed.")
else:
    # Insert new imports after the last import statement
    import_match = list(re.finditer(r'^import .*;\n', content, re.MULTILINE))
    if import_match:
        last_import = import_match[-1]
        insert_pos = last_import.end()
        content = content[:insert_pos] + "\n" + "\n".join(new_imports) + "\n" + content[insert_pos:]
    else:
        content = "\n".join(new_imports) + "\n\n" + content

    # Insert new projects at the end of the projects array
    proj_array_end = content.find("];\n\nexport const categories")
    if proj_array_end != -1:
        # Find the last closing brace before proj_array_end
        content = content[:proj_array_end] + "\n".join(new_projects) + "\n" + content[proj_array_end:]
    
    with open(data_file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Added {len(new_imports)} new imports and projects.")
