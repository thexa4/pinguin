var spine = require('../SpineUtil');
spine.AttachmentType = require('./AttachmentType');
spine.BoundingBoxAttachment = function (name)
{
    this.name = name;
    this.vertices = [];
};
spine.BoundingBoxAttachment.prototype = {
    type: spine.AttachmentType.boundingbox,
    computeWorldVertices: function (x, y, bone, worldVertices)
    {
        x += bone.worldX;
        y += bone.worldY;
        var m00 = bone.m00, m01 = bone.m01, m10 = bone.m10, m11 = bone.m11;
        var vertices = this.vertices;
        for (var i = 0, n = vertices.length; i < n; i += 2)
        {
            var px = vertices[i];
            var py = vertices[i + 1];
            worldVertices[i] = px * m00 + py * m01 + x;
            worldVertices[i + 1] = px * m10 + py * m11 + y;
        }
    }
};
module.exports = spine.BoundingBoxAttachment;

