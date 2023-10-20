local QBCore = exports['qb-core']:GetCoreObject()
local IsUiShow = false

RegisterCommand("coord", function(source, args)
        SetNuiFocus(true, true)
        local player = PlayerPedId()
        local coords = GetEntityCoords(player, true)
        local head = GetEntityHeading(player)
        x,y,z = table.unpack(coords)
        local vec4 = "vector4(".. Round(x,2)..", "..Round(y,2)..", "..Round(z,2)..", "..Round(head, 2)..")";
        local vec3 = "vector3(".. Round(x,2)..", "..Round(y,2)..", "..Round(z,2)..")";
        local XYZ= Round(x,2)..", "..Round(y,2)..", "..Round(z,2);
        SendNUIMessage({
            action = "open",
            coord = XYZ,
            vect4 = vec4,
            vect3 = vec3
        })
end)

RegisterNUICallback("close", function(data)
	SetNuiFocus(false,false)
end)
