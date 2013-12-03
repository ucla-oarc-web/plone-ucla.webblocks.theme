require 'pathname'

# This is the location where the theme and WebBlocks-kit-core directories reside
rootdir = Pathname.new(__FILE__).realpath.parent.parent

# True to compile in debug mode (no minification)
WebBlocks.config[:build][:debug] = true

# The directory into which WebBlocks is built
WebBlocks.config[:build][:dir] = "#{rootdir}/theme/static/blocks"

# The directory where sources for the build are located
WebBlocks.config[:src][:dir] = "#{rootdir}/theme/blocks"

# Location of WebBlocks core components (config.rb, definitions, core adapter)
WebBlocks.config[:src][:core][:dir] = "#{rootdir}/WebBlocks-kit-core/_blocks/src/core"

# Location of WebBlocks adapters
WebBlocks.config[:src][:adapters][:dir] = "#{rootdir}/WebBlocks-kit-core/_blocks/src/adapter"

# Location of WebBlocks adapters
WebBlocks.config[:src][:extension][:dir] = "#{rootdir}/WebBlocks-kit-core/extension"

WebBlocks.config[:src][:extensions] << "blocks"
WebBlocks.config[:src][:extensions] << "ucla"
WebBlocks.config[:src][:extensions] << "WebBlocks.Blocks.js"

# Do not use an adapter
WebBlocks.config[:src][:adapter] = false

# Uncomment this line if site is already built with Bootstrap:
#WebBlocks.config[:src][:adapter] = 'bootstrap'

# Use the ARIA Mapper package
WebBlocks.config[:build][:packages] << :jqueryariamapper
