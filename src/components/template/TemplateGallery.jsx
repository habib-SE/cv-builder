import React from "react";
import TemplatesCard from "./TemplatesCard";
import Temp1 from '../../assets/temp1.jpg'
import Temp2 from '../../assets/temp2.jpg'

// Sample data for templates
const templates = [
  {
    id: 1,
    image: Temp1,
    description: "A clean, modern CV template ideal for professionals.",
  },
  {
    id: 2,
    image: Temp2,
    description: "A creative template perfect for designers and creatives.",
  },
  // Add more templates as needed
];

const TemplateGallery = () => {
  const handleUseTemplate = (templateId) => {
    // Logic to select and use the template (redirect or set state)
    console.log(`Using template ${templateId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap -mx-4">
        {templates.map((template) => (
          <TemplatesCard
            key={template.id}
            templateImage={template.image}
            description={template.description}
            onUseTemplate={() => handleUseTemplate(template.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;
